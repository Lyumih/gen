namespace $.$$ {
	export class $gen_app_craft extends $.$gen_app_craft {

		equipment_level(): string {

			return `Уровень снаряжения: ${ this.equipment().level() }`
		}

		equipment(): $gen_engine_item_equipment {
			return $gen_engine_item_equipment.make( {
				level: () => 10
			} )
		}

	}
}
