import { useMetaMask } from 'metamask-react'
import { FC } from 'react'

const Meta: FC = () => {
	const { status, connect, account, chainId, ethereum } = useMetaMask()

	if (status === 'initializing')
		return <div>Synchronisation with MetaMask ongoing...</div>

	if (status === 'unavailable') return <div>MetaMask not available :(</div>

	if (status === 'notConnected')
		return <button onClick={connect}>Connect to MetaMask</button>

	if (status === 'connecting') return <div>Connecting...</div>

	if (status === 'connected') console.log(ethereum)

	return (
		<div>
			Connected account {account} on chain ID {chainId}
		</div>
	)

	return null
}

export default Meta
