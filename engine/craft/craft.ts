namespace $ {

	export class $gen_engine_craft extends $mol_object {

		unit( next?: $gen_engine_unit ): $gen_engine_unit {
			return next ?? new $gen_engine_unit
		}
		equipment( next?: $gen_engine_item_equipment ): $gen_engine_item_equipment {
			return next ?? new $gen_engine_item_equipment
		}

		prop_level_up() {
			console.log( 'prop_level_up' )
			this.unit().points( this.unit().points() - 1 )
			this.equipment().level( this.equipment().level() + 1 )
		}
	}
}
