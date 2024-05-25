// An array to store NFT's
const storeNFTs=[];

// Function to create metadata and store it in the above variable
function mintNFT (_name,_hairColor,_shirt,_bling) {
	const NFT={
		"name":_name,
        "hairColor":_hairColor,
        "shirtStyle":_shirt,
        "bling":_bling
	}
    storeNFTs.push(NFT);
    console.log("Minted NFT:"+ _name);
}

// Function to itereate through the stored NFTs and print their metadata
function listNFTs () {
	for(let i=0;i<storeNFTs.length;i++){
		console.log("ID:\t\t"+(i+1));
		console.log("Name:\t\t"+storeNFTs[i].name);
		console.log("Hair color:\t"+storeNFTs[i].hairColor);
		console.log("Shirt Type:\t"+storeNFTs[i].shirtStyle);
		console.log("Bling:\t\t"+storeNFTs[i].bling);
		console.log("-----------------------");
		
	}
}

// Fuction to print the total number of NFTs minted to the console
function getTotalSupply() {
	console.log("\nTotal supply: "+storeNFTs.length);
	
}

// Calling functions here
mintNFT("Divyansh","Black","Polo","Golden watch");
mintNFT("Sandhu","Brown","Printed","diamond crown");
mintNFT("Yash","Grey","Oversized","silver chain");
listNFTs();
getTotalSupply();
