// // SPDX-License-Identifier: SEE LICENSE IN LICENSE
// pragma solidity ^0.8.0;
// import "./Medal.sol";
// import "./Badge.sol";

// contract OrganizationFactory {
//     Badge[] public _badges;
//     Medal[] public _medals;

//     mapping (address => address) public badgeList;
//     mapping (address => address) public medalList;

//     function createBadge(
//         string memory name,
//         string memory symbol,
//         string memory uri
//     ) public {
//         Badge badge = new Badge(
//             name,
//             symbol
//         );
//         _badges.push(badge);
//         badgeList[msg.sender] = address(badge);

//         Medal medal = new Medal(
//             uri
//         );
//         medalList[msg.sender] = address(medal);
//         _medals.push(medal);
//     }

//     function allBadges(uint256 limit, uint256 offset)
//         public
//         view
//         returns (Badge[] memory badges)
//     {
//         badges = _badges;
//     }

//     function allMedals(uint256 limit, uint256 offset)
//         public
//         view
//         returns (Medal[] memory medals)
//     {
//         medals = _medals;
//     }
// }