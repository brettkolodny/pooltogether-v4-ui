import React, { useEffect } from 'react'

import { PagePadding } from '@components/Layout/PagePadding'
import { useRouter } from 'next/router'
import { AccountCard } from '@views/Account/AccountCard'
import { isAddress } from 'ethers/lib/utils'
import { InvalidAddressCard } from './InvalidAddressCard'
import { OddsDisclaimer } from '@views/Account/OddsDisclaimer'
import { SimpleV4DepositList, SimpleV3DepositList } from './DepositLists'

export const SimpleAccountUI = () => {
  const router = useRouter()
  const usersAddress = router.query.usersAddress as string

  if (!isAddress(usersAddress)) {
    return (
      <PagePadding className='space-y-8'>
        <InvalidAddressCard />
      </PagePadding>
    )
  }

  return (
    <PagePadding className='space-y-8'>
      <AccountCard usersAddress={usersAddress} showAddress />
      <SimpleV4DepositList usersAddress={usersAddress} />
      <SimpleV3DepositList usersAddress={usersAddress} />
      <OddsDisclaimer className='block mt-6' />
    </PagePadding>
  )
}
