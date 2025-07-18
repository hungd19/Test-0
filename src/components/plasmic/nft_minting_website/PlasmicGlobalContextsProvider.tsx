// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mbwfffo6qt2cXYJuDjuisP

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { Web3GlobalContext } from "suinova-nft-builder/dist/index.js";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  web3GlobalContextProps?: Partial<
    Omit<React.ComponentProps<typeof Web3GlobalContext>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, antdConfigProviderProps, web3GlobalContextProps } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <Web3GlobalContext
        {...web3GlobalContextProps}
        contractPackageId={
          web3GlobalContextProps &&
          "contractPackageId" in web3GlobalContextProps
            ? web3GlobalContextProps.contractPackageId!
            : "0x2d99da054514ff31c7e7da82751d11bb16b53c66290c435a409e17c8992e35ed"
        }
        createdCollection={
          web3GlobalContextProps &&
          "createdCollection" in web3GlobalContextProps
            ? web3GlobalContextProps.createdCollection!
            : undefined
        }
        importedCollection={
          web3GlobalContextProps &&
          "importedCollection" in web3GlobalContextProps
            ? web3GlobalContextProps.importedCollection!
            : undefined
        }
        mintingInfo={
          web3GlobalContextProps && "mintingInfo" in web3GlobalContextProps
            ? web3GlobalContextProps.mintingInfo!
            : {
                id: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                projectId: "uxSvnFVJhHuq8fAQzP1gkK",
                collectionId: null,
                admin:
                  "0x7c484896d088f2eb3012cac48de62fd4ec02c54540cbb1cd5e312e02216d055a",
                name: "SUI NoVa",
                description: "SUI NoVa",
                imageUrl:
                  "https://dev-suinova.s3.ap-southeast-1.amazonaws.com/4621c944c6fe416d850d02b1db4014f2.svg",
                royaltyFee: "0",
                hasPresale: false,
                whitelistStartTime: null,
                whitelistEndTime: null,
                presaleStartTime: null,
                presaleEndTime: null,
                presaleNftPrice: null,
                presaleWhitelistedUsers: null,
                presaleTotalNft: null,
                presaleNftPerUser: null,
                publicSaleStartTime: null,
                publicSaleEndTime: null,
                publicNftPrice: null,
                nftPerUser: null,
                totalSupply: null,
                mintedSupply: "0",
                status: "DRAFT",
                createdAt: "2025-05-22T22:31:08.896Z",
                updatedAt: "2025-05-22T22:31:08.896Z",
                items: [
                  {
                    id: "48",
                    launchpadId: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                    name: "Suinova testnet",
                    description: "Suinova testnet",
                    imageUrl:
                      "https://dev-suinova.s3.ap-southeast-1.amazonaws.com/4621c944c6fe416d850d02b1db4014f2.svg",
                    attributes: [
                      { value: "red", trait_type: "background" },
                      { value: "gray", trait_type: "background" },
                      { value: "pink", trait_type: "background" }
                    ],
                    creator:
                      "0x7c484896d088f2eb3012cac48de62fd4ec02c54540cbb1cd5e312e02216d055a",
                    createdAt: "2025-05-22T22:31:08.903Z",
                    updatedAt: "2025-05-22T22:31:08.903Z"
                  }
                ],
                visions: [
                  {
                    id: "22",
                    launchpadId: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                    description: "milestone1",
                    visionTime: "2025-05-23T06:29:43.208Z",
                    createdAt: "2025-05-22T22:31:08.910Z",
                    updatedAt: "2025-05-22T22:31:08.910Z"
                  },
                  {
                    id: "23",
                    launchpadId: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                    description: "milestone2",
                    visionTime: "2025-05-30T06:29:44.000Z",
                    createdAt: "2025-05-22T22:31:08.910Z",
                    updatedAt: "2025-05-22T22:31:08.910Z"
                  }
                ],
                teams: [
                  {
                    id: "28",
                    launchpadId: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                    memberName: "member1",
                    memberTitle: "developer",
                    createdAt: "2025-05-22T22:31:08.917Z",
                    updatedAt: "2025-05-22T22:31:08.917Z"
                  },
                  {
                    id: "29",
                    launchpadId: "77ef09c2-9eac-4087-b9ec-dd624d6d9a3f",
                    memberName: "member2",
                    memberTitle: "manager",
                    createdAt: "2025-05-22T22:31:08.917Z",
                    updatedAt: "2025-05-22T22:31:08.917Z"
                  }
                ]
              }
        }
      >
        {children}
      </Web3GlobalContext>
    </AntdConfigProvider>
  );
}
