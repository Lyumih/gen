namespace $ {
	export class $gen_engine_item_equipment_all extends $mol_object {

		@$mol_mem
		all() {
			return [
				this.sword(), this.staff(), this.whip()
			]
		}

		sword() {
			const equipment = new $gen_engine_item_equipment()
			equipment.part( 'weapon' )
			equipment.name( 'Меч' )
			equipment.description( 'Простой меч' )
			equipment.level( 10 )
			return equipment
		}


		staff() {
			const equipment = new $gen_engine_item_equipment()
			equipment.part( 'weapon' )
			equipment.name( 'Посох' )
			equipment.description( 'Простой посох' )
			equipment.level( 13 )
			return equipment
		}

		whip() {
			const equipment = new $gen_engine_item_equipment()
			equipment.part( 'weapon' )
			equipment.name( 'Кнут' )
			equipment.description( 'Простой кнут' )
			equipment.level( 15 )
			return equipment
		}

	}
}
