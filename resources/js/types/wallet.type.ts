export interface UserWalletProvider {
	name: string
	image: string
	link: string
}

export interface UserWallet {
	wallet: UserWalletProvider
	address: string
}
