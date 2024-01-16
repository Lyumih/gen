namespace $ {
	export class $gen_engine_item_equipment_all extends $mol_object {

		@$mol_mem
		all() {
			return [
				$gen_engine_item_equipment.make( {
					part: () => 'body',
				} )
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

	}
}
