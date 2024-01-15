namespace $.$$ {
	export class $gen_app_craft extends $.$gen_app_craft {

		equipment_level(): string {
			return `Уровень снаряжения: ${ this.equipment().level() }`
		}

		@$mol_mem
		unit( next?: $gen_engine_unit ): $gen_engine_unit {
			if( next ) return next
			const hero = new $gen_engine_unit
			hero.points( 33 )
			return hero
		}

		@$mol_mem
		equipment( next?: $gen_engine_item_equipment ): $gen_engine_item_equipment {
			return next ?? new $gen_engine_item_equipment
		}

		points_title(): string {
			return `пт: ${ this.unit().points() }`
		}

		@$mol_mem
		craft( next?: $gen_engine_craft ) {
			if( next ) return next
			const craft = new $gen_engine_craft
			craft.unit( this.unit() )
			craft.equipment( this.equipment() )
			console.log( 'set unit' )
			return craft
		}

		prop_level_up( next?: any ) {
			this.craft().prop_level_up()
		}

	}
}
