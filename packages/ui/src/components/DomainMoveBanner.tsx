import { Alert, IconButton, styled } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiOutlineXMark as CloseIcon } from 'react-icons/hi2'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { Link } from './library'

interface Props {
  className?: string
}

const DISMISSED_BANNER_KEY = 'multix.dismissedDomainMoveBanner'

export const DomainMoveBanner = ({ className = '' }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const doNotDisplay = localStorage.getItem(DISMISSED_BANNER_KEY) === 'true'
  const isOnMultixCloud = useMemo(() => window.location.hostname.includes('multix.cloud'), [])

  useEffect(() => {
    if (!doNotDisplay) {
      setIsVisible(true)
    }
  }, [doNotDisplay])

  const onClose = useCallback(() => {
    localStorage.setItem(DISMISSED_BANNER_KEY, 'true')
    setIsVisible(false)
  }, [])

  if (!isVisible || isOnMultixCloud) return null

  return (
    <Alert
      severity="info"
      className={className}
    >
      <InfoTextStyled>
        Multix is moving to a new domain. Please update your bookmarks to
        <Linkstyled href="https://multix.cloud">
          multix.cloud
          <LaunchIcon
            className="icon"
            size={20}
          />
        </Linkstyled>
      </InfoTextStyled>
      <IconButton
        className="closeButton"
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon size={20} />
      </IconButton>
    </Alert>
  )
}

const Linkstyled = styled(Link)`
  display: inline-flex;
  padding: 0 0 0 0.5rem;

  .icon {
    padding-left: 0.5rem;
  }
`

const InfoTextStyled = styled('div')`
  flex: 1;
`

export default styled(DomainMoveBanner)`
  width: 100%;
  margin-bottom: 1rem;

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .MuiAlert-icon {
    align-items: center;
  }
`
