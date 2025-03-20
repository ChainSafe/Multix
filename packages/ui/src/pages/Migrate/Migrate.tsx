import { Alert, Grid2 as Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MigratedData, useImportExportLocalData } from '../../hooks/useImportExportLocalData'
import { useNavigate, useSearchParams } from 'react-router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Expander from '../../components/Expander'
import AccountDisplay from '../../components/AccountDisplay/AccountDisplay'
import { useGetEncodedAddress } from '../../hooks/useGetEncodedAddress'
import { MdOutlineFlare as FlareIcon } from 'react-icons/md'
import { Button } from '../../components/library'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

interface Props {
  className?: string
}

const Migrate = ({ className }: Props) => {
  const { decodeData, mergeWithLocalData } = useImportExportLocalData()
  const [decodedData, setDecodedData] = useState<MigratedData | undefined>(undefined)
  const [searchParams] = useSearchParams({ d: '' })
  const [isMigrating, setIsMigrating] = useState(false)
  const getEncodedAddress = useGetEncodedAddress()
  const hasDecodedData = useMemo(
    () =>
      !!decodedData &&
      ((decodedData.hiddenAccounts || []).length > 0 ||
        (decodedData.watchedPubKeys || []).length > 0 ||
        Object.entries(decodedData.pubKeyNames || {}).length > 0),
    [decodedData]
  )
  const [isDone, setIsDone] = useState(false)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const data = searchParams.get('d')
    if (data) {
      setDecodedData(decodeData(data))
    }
  }, [decodeData, searchParams])

  const onMigrate = useCallback(() => {
    if (!decodedData) return

    setIsMigrating(true)
    try {
      mergeWithLocalData(decodedData)
      setIsDone(true)
    } catch (e: any) {
      setError(e)
      console.error(e)
    } finally {
      setIsMigrating(false)
    }
  }, [decodedData, mergeWithLocalData])

  return (
    <Grid
      className={className}
      container
    >
      <Grid size={{ xs: 12 }}>
        <h1>Local data migration</h1>
        <p>
          With Multix, your data is private and local! You can migrate your data from the old domain
          to the new one.
          <br />
        </p>
      </Grid>
      {!isDone && hasDecodedData && (
        <Grid
          container
          alignItems="center"
        >
          <Grid size={{ xs: 12 }}>The following data will be migrated:</Grid>

          {decodedData?.watchedPubKeys && decodedData?.watchedPubKeys.length > 0 && (
            <>
              <ExpanderWrapper size={{ xs: 12, sm: 8, lg: 6 }}>
                <Expander
                  title={`Watched accounts (${decodedData?.watchedPubKeys.length})`}
                  content={decodedData.watchedPubKeys.map((pubKey) => (
                    <EntryWrapperStyled key={pubKey}>
                      <AccountDisplay
                        iconSize="small"
                        address={getEncodedAddress(pubKey) || ''}
                        canEdit={false}
                      />
                    </EntryWrapperStyled>
                  ))}
                />
              </ExpanderWrapper>
              <Grid size={{ xs: 0, sm: 4, lg: 6 }} />
            </>
          )}
          {decodedData?.hiddenAccounts && decodedData?.hiddenAccounts.length > 0 && (
            <>
              <ExpanderWrapper size={{ xs: 12, sm: 8, lg: 6 }}>
                <Expander
                  title={`Hidden accounts (${decodedData?.hiddenAccounts.length})`}
                  content={decodedData.hiddenAccounts.map(({ pubKey, network }) => (
                    <EntryWrapperStyled key={pubKey}>
                      {network}:{' '}
                      <AccountDisplay
                        iconSize="small"
                        address={getEncodedAddress(pubKey) || ''}
                        canEdit={false}
                      />
                    </EntryWrapperStyled>
                  ))}
                />
              </ExpanderWrapper>
              <Grid size={{ xs: 0, sm: 4, lg: 6 }} />
            </>
          )}
          {decodedData?.pubKeyNames && Object.entries(decodedData?.pubKeyNames).length > 0 && (
            <>
              <ExpanderWrapper size={{ xs: 12, sm: 8, lg: 6 }}>
                <Expander
                  title={`Account names (${Object.entries(decodedData?.pubKeyNames).length})`}
                  content={Object.entries(decodedData?.pubKeyNames).map(([pubKey, name]) => (
                    <EntryWrapperStyled key={pubKey}>
                      {name}:{' '}
                      <AccountDisplay
                        iconSize="small"
                        address={getEncodedAddress(pubKey) || ''}
                        canEdit={false}
                        withName={false}
                      />
                    </EntryWrapperStyled>
                  ))}
                />
              </ExpanderWrapper>
              <Grid size={{ xs: 0, sm: 4, lg: 6 }} />
            </>
          )}
          {!!error && <AlertStyled severity="error">{error}</AlertStyled>}

          <ButtonWrapper
            size={{ xs: 12 }}
            justifyContent={'center'}
          >
            <Button
              variant="primary"
              onClick={onMigrate}
              disabled={isMigrating}
            >
              Migrate
            </Button>
          </ButtonWrapper>
        </Grid>
      )}
      {!isDone && !hasDecodedData && (
        <Grid size={{ xs: 12 }}>
          <NoCallWrapperStyled>
            <FlareIconStyled size={24} />
            <div>No data to migrate!</div>
          </NoCallWrapperStyled>
        </Grid>
      )}
      {isDone && (
        <>
          <Grid
            size={{ xs: 6 }}
            textAlign={'right'}
          >
            <StyledSuccessIcon />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <StyledTitle>All done!</StyledTitle>
          </Grid>
          <ButtonWrapper
            size={{ xs: 12 }}
            justifyContent={'center'}
          >
            <Button
              variant="primary"
              onClick={() =>
                navigate({
                  pathname: '/'
                })
              }
            >
              Return Home
            </Button>
          </ButtonWrapper>
        </>
      )}
    </Grid>
  )
}

const AlertStyled = styled(Alert)`
  margin-bottom: 1rem;
`

const StyledTitle = styled('h2')`
  display: flex;
  align-items: center;
`

const StyledSuccessIcon = styled(HiOutlineCheckCircle)`
  font-size: 10rem;
  color: ${({ theme }) => theme.custom.text.addressColorLightGray};
  margin-right: 1rem;
`
const ButtonWrapper = styled(Grid)`
  margin-top: 2rem;
  text-align: center;
`

const FlareIconStyled = styled(FlareIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const NoCallWrapperStyled = styled(Paper)`
  background-color: ${({ theme }) => theme.custom.background.primary};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 2rem;
`

const ExpanderWrapper = styled(Grid)`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.custom.background.primary};
  border-radius: 0.5rem;
`

const EntryWrapperStyled = styled('div')`
  padding-left: 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`
export default styled(Migrate)``
