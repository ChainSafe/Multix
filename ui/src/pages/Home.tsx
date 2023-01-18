import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components";
import { Box, Button, Chip, CircularProgress, Grid, Paper } from "@mui/material";
import NewTxModal from "../components/modals/NewTx";
import { useApi } from "../contexts/ApiContext";
import { useMultisig } from "../contexts/MultisigContext";
import { PendingTx, usePendingTx } from "../hooks/usePendingTx";
import { getMultisigMethodAndArgs } from "../utils"
import { ApiPromise } from "@polkadot/api";
import Identicon from "@polkadot/react-identicon";
import { ICON_SIZE, ICON_THEME } from "../constants";
import { getDisplayAddress } from "../utils/getDisplayAddress";
import GestureIcon from '@mui/icons-material/Gesture';
import Expander from "../components/Expander";

interface Props {
  className?: string
}

interface AggregatedData {
  callData?: string;
  info?: {
    name: string;
    args: Record<string, any>
  }
}

const getAgregatedDataPromise = (data: PendingTx[], api: ApiPromise) => data.map(async (pendingTx) => {
  const blockHash = await api.rpc.chain.getBlockHash(pendingTx.info.when.height);
  const signedBlock = await api.rpc.chain.getBlock(blockHash)

  const ext = signedBlock.block.extrinsics[pendingTx.info.when.index]
  // @ts-ignore
  const res = getMultisigMethodAndArgs(ext?.toHuman()?.method)
  const call = api.tx[res.section][res.method](...Object.values(res.args))
  console.log('call hash', call.toHex())
  console.log('call method', call.method.hash.toHex())

  if (call.method.hash.toHex() !== pendingTx.hash) {
    console.log('oops we didnot find the right extrinsic', call.toHex(), pendingTx.hash)
    return {}
  }

  return {
    callData: call.toHex(),
    info: {
      name: `${res.section}.${res.method}`,
      args: res.args
    }
  }
})

const Landing = ({ className }: Props) => {
  const { api, isApiReady } = useApi()
  const [isNewTxModalOpen, setIsNewTxModalOpen] = useState(false)
  const { isLoading, multisigList, selectedMultisig, selectedHasProxy } = useMultisig()
  const { data, isLoading: isLoadingPendingTxs } = usePendingTx(selectedMultisig?.id)
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([])
  const displayAddress = useMemo(() => (selectedHasProxy ? selectedMultisig?.proxy?.id : selectedMultisig?.id) || "", [selectedHasProxy, selectedMultisig])

  console.log('isLoadingPendingTxs', isLoadingPendingTxs)
  useEffect(() => {
    if (!isApiReady) {
      return
    }

    setAggregatedData([])

    if (!data || !data.length) {
      return
    }

    const agregatedDataPromise = getAgregatedDataPromise(data, api)

    Promise.all(agregatedDataPromise)
      .then((res) => {
        setAggregatedData(res)
      })
      .catch(console.error)

    // const proxyTx = api.tx.proxy.createPure("Any", 0, 0)
    // console.log('proxyTx hex', proxyTx.toHex())
    // console.log('proxyTx hash', proxyTx.method.hash.toHex())
  }, [api, data, isApiReady, selectedMultisig])

  const onClose = useCallback(() => {
    setIsNewTxModalOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsNewTxModalOpen(true)
  }, [])


  return (
    <Grid
      className={className}
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        {isLoading && (
          <div>
            Loading...
          </div>
        )}
        {!isLoading && multisigList.length === 0 && (
          <div>
            No multisig found for your accounts. Create one!
          </div>
        )}
        {selectedMultisig &&
          <>
            <div className="headerWrapper">
              <h3>Multisig{selectedHasProxy ? " (proxy)" : ""}</h3>
              <div className="multisigHeader">
                <Chip
                  className="threshold"
                  label={`${selectedMultisig.threshold}/${selectedMultisig.signers.length}`}
                />
                <Identicon
                  value={displayAddress}
                  size={ICON_SIZE}
                  theme={ICON_THEME}
                  className="identicon"
                />
                {getDisplayAddress(displayAddress)}
              </div>
            </div>
            <div className="signatoriesWrapper">
              <h3>Signatories</h3>
              <ul className="addressList">
                {selectedMultisig.signers.map(({ signer }) =>
                  <li
                    key={signer.id}
                    className="address"
                  >
                    <Identicon
                      value={signer.id}
                      size={ICON_SIZE}
                      theme={ICON_THEME}
                      className="identicon"
                    />
                    {getDisplayAddress(signer.id)}
                  </li>
                )}
              </ul>
            </div>
          </>
        }
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <div className="actionWrapper">
          <h3>Proposals</h3>
          {isLoadingPendingTxs && (<Box className="loader">
            <CircularProgress />
          </Box>)
          }
          {!!data.length && (
            aggregatedData.map(({ callData, info }, index) => {

              return (
                <Paper
                  className="callWrapper"
                  key={`${index}-${callData}`}
                >
                  <GestureIcon className="callIcon" />
                  <div className="callInfo">
                    <h4 className="callName">{info?.name}</h4>
                    {info?.args && <Expander
                      title="Params"
                      content={
                        <ul className="paramWrapper">
                          {Object.entries(info.args).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
                        </ul>
                      }
                    />}

                  </div>
                </Paper>
              )
            })
          )}
        </div>
      </Grid>
      <Button onClick={onOpenModal}>New Tx</Button>
      {isNewTxModalOpen && <NewTxModal onClose={onClose} />}
    </Grid>
  )
}

export default styled(Landing)(({ theme }) => `
  padding: 1rem;

  .loader {
    display: flex;
    justify-content: center;
  }

  .multisigHeader {
    position: relative
  }
  .threshold {
    position: relative;
    top: -1rem;
    background-color: #ebebeb;
    margin-right: -0.5rem;
  }

  .addressList {
    list-style-type: none;
  }

  .address, .multisigHeader {
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
  }

  .identicon {
    margin-right: .5rem;
  }

  .signatoriesWrapper {
    & > h3 {
      margin-bottom: 0;
    }
  }

  .callWrapper {
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
  }

  .callIcon {
    font-size: 7rem;
    background-color: #ebebeb;
    margin: .5rem;
    padding: 1rem;
  }

  .callName {
    margin-top: 0.5rem;
    margin-left: .5rem;
  }
`)