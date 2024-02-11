import React, { ReactElement, useEffect, useState } from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet, PokemonSetLogo, PokemonSetName, PokemonTCGSeries } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllSetsOfASeries } from '../../../../util/api/pokemonTGC/querys'
import styles from './SetMenu.module.scss'
import SetMenuItem from './SetMenuItem/SetMenuItem'

interface SetMenuProps {
  currentlySelectedPokemonSeries: PokemonTCGSeries
  areCardsLoading: boolean
  setCardsLoading: (areCardsLoading: boolean) => void
  toggleSetMenu: (setOpen: boolean) => void
  setMenuIsOpen: boolean
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SetMenu(props: SetMenuProps) {
  const [allSetsFromASeries, setAllSetsFromASeries] = useState<PokemonSet[]>([])
  const [currentlySelectedPokemonSet, _setCurrentlySelectedPokemonSet] = useState<PokemonSetName | undefined>(undefined)
  const [currentlySelectedPokemonSetLogoUrl, _setCurrentlySelectedPokemonSetLogoUrl] = useState<PokemonSetLogo | undefined>(undefined)

  function setCurrentlySelectedPokemonSet(set: PokemonSetName) {
    _setCurrentlySelectedPokemonSet(set)
  }

  function setCurrentlySelectedPokemonSetImageUrl(url: PokemonSetLogo) {
    _setCurrentlySelectedPokemonSetLogoUrl(url)
  }

  useEffect(() => {
    props.setCardsLoading(true)
    setAllSetsFromASeries([])
    const getSetData = async () => {
      try {
        const result = await fetchAllSetsOfASeries(props.currentlySelectedPokemonSeries)
        setAllSetsFromASeries(result)
        props.setCardsLoading(false)
      } catch (error) {
        console.error('Error in Market - getSetData useEffect:', error)
      }
    }

    getSetData().then(() => props.setCardsLoading(false))
  }, [props.currentlySelectedPokemonSeries])

  const setArray: ReactElement<PokemonSet>[] = []
  allSetsFromASeries.forEach((set) => {
    setArray.push(
      <SetMenuItem
        key={set.name}
        setName={set.name}
        setSymbol={set.images.symbol}
        setLogo={set.images.logo}
        setContentOfCardList={props.setCardList}
        setCardsLoading={props.setCardsLoading}
        areCardsLoading={props.areCardsLoading}
        toggleSetMenu={props.toggleSetMenu}
        currentlySelectedPokemonSet={currentlySelectedPokemonSet}
        setCurrentlySelectedPokemonSet={setCurrentlySelectedPokemonSet}
        setCurrentlySelectedPokemonSetLogoUrl={setCurrentlySelectedPokemonSetImageUrl}
      />
    )
  })

  return (
    <div className={styles.setMenuWrapper}>
      {currentlySelectedPokemonSet ? (
        <div className={styles.setImage}>
          <img
            onClick={() => props.toggleSetMenu(true)}
            src={currentlySelectedPokemonSetLogoUrl as unknown as string}
            alt={currentlySelectedPokemonSet as unknown as string}
          />
        </div>
      ) : undefined}
      {props.setMenuIsOpen ? (
        <div className={styles.setMenuContainer}>
          <div className={styles.overlay} onClick={() => props.toggleSetMenu(false)} />
          <div className={styles.setMenu}>{setArray}</div>
        </div>
      ) : undefined}
    </div>
  )
}
