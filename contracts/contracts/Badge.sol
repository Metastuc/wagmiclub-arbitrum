// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "./extensions/VRC725Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./libraries/Strings.sol";

contract Badge is VRC725Enumerable {
    using Strings for uint256;
    using Counters for Counters.Counter; // OpenZepplin Counter
    Counters.Counter private _badgeCount; // Counter for badges minted

    string public baseURI_;

    constructor(string memory uri) {
        __VRC725_init("Wagmi Club", "WGM", msg.sender);
        baseURI_ = uri;
    }

    function mint(address owner) external {
        _safeMint(owner, _badgeCount.current());
        _badgeCount.increment();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI_;
    }

    function _updateURI(string memory uri) external onlyOwner {
        baseURI_ = uri;
    }

    function permit(address spender, uint256 tokenId, uint256 deadline, bytes memory signature) external virtual override {
        revert("Can not permit for a soulbound token");
    }

    function permitForAll(address owner, address spender, uint256 deadline, bytes memory signature) external virtual override {
        revert("Can not permit for a soulbound token");
    }

    function approve(address to, uint256 tokenId) public override(IERC721, VRC725) {
       revert("Can not approve for a soulbound token");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override(IERC721, VRC725) {
        revert("Can not transfer a soulbound token");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(IERC721, VRC725) {
        revert("Can not transfer a soulbound token");
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(IERC721, VRC725) {
        revert("Can not transfer a soulbound token");
    }
}