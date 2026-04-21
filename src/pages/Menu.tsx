import {MenuRestaurant} from '@/assets/components/templates/MenuRestaurant'
import {SectionTemplate} from '@/assets/components/templates/SectionTemplate'

import { MenuCardData } from '@/assets/data/MenuCardData'

export default function Menu() {
  return (
    <SectionTemplate additionalClassName='h-screen'>
      <MenuRestaurant cards={MenuCardData} />
    </SectionTemplate>
  )
}