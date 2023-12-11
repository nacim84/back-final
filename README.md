# Projet final : Systeme de vote programmable.

## Pour correction :
1. **Lien vidéo:** 
2. **Lien Déploiement:** https://rn-last-project-alyra-2023.vercel.app/

## Groupe constitué de :
- Nacim Rabia

**Niveaux bonnes pratiques:**
NATSPEC comments are implemented in ResolutionsVoting.sol.

## Bellow the tests reports

## 1 - Code coverage
<img src="back/public/unit_tests_coverage.JPG"></img>

## 2 - Gas report
<img src="back/public/gas_estimation.JPG"></img>

## Technologies:
Voici la liste de la stack utilisée pour la réalisation du projet

- Solidity
- Openzeppelin
- Alchemy provider
- HardHat

## Setup project

## Back

  1 - Install dependencies
  ```shell
  cd back-final
  npm i
  ```

  2 - Run the HardHat BC (Node BC)
  ```shell
  npm run local-bc
  ```

  4 - Deploy the voting contract
  ```shell
  npm run deploy-localhost
  ```

> **Note**  
> If you want to use the CoinMarketCap API for Gas estimation, you must fill in the missing information in the .env file.

> **Important**  
> Please don't commit .env with your sensitive information.n
