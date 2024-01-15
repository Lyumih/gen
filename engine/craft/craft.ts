namespace $ {

	type Cost = {
		prop_level_up: number
		prop_add: number
		prop_remove: number
	}
	export class $gen_engine_craft extends $mol_object {

		@$mol_mem
		unit( next?: $gen_engine_unit ): $gen_engine_unit {
			return next ?? new $gen_engine_unit
		}

		@$mol_mem
		equipment( next?: $gen_engine_item_equipment ): $gen_engine_item_equipment {
			return next ?? new $gen_engine_item_equipment
		}

		@$mol_mem
		cost( next?: Cost ) {
			return next ?? {
				prop_level_up: 1,
				prop_add: 5,
				prop_remove: 10,
			}
		}

		prop_add( prop: $gen_engine_item_prop ) {
			if( this.equipment().add_prop( prop ) ) {
				this.points_minus( this.cost().prop_add )
			}
		}

		prop_remove( id: string ) {
			if( this.equipment().remove_prop( id ) ) {
				this.points_minus( this.cost().prop_remove )
			}
		}

		points_minus( cost: number ) {
			this.unit().points( this.unit().points() - cost )
		}

		prop_level_up( id: string ) {
			console.log( 'prop_level_up', id )
			if( this.equipment().prop_level_up( id ) ) {
				this.points_minus( this.cost().prop_level_up )
			}
		}
	}
}
