namespace $.$$ {
	export class $gen_app_craft extends $.$gen_app_craft {

		equipment_level(): string {
			return `Уровень снаряжения: ${ this.equipment().level() }`
		}

		@$mol_mem
		unit( next?: $gen_engine_item_unit ): $gen_engine_item_unit {
			if( next ) return next
			const hero = new $gen_engine_item_unit
			hero.points( 33 )
			return hero
		}

		@$mol_mem
		equipment( next?: $gen_engine_item_equipment ): $gen_engine_item_equipment {
			return next ?? this.unit().equipments()[ 0 ]
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
			return craft
		}

		prop_list(): readonly any[] {
			return this.equipment().props().map( prop => this.Prop( prop.id ) )
		}

		prop_open( next?: any ) {
			this.craft().prop_add( new $gen_engine_item_prop )
		}

		prop_level_up( next?: any ) {
			// this.craft().prop_level_up()
		}

	}
}
