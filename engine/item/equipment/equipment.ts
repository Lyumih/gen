namespace $ {

	type Config = {
		max_props: number
	}
	export class $gen_engine_item_equipment extends $gen_engine_item {

		// override type() {
		// 	return 'equipment'
		// }

		// /** Часть снаряжения */
		// @$mol_mem
		// part( next?: string ): string {
		// 	$mol_wire_solid()
		// 	return next ?? 'equipment'
		// }


		@$mol_mem
		props( next?: $gen_engine_item_prop[] ): $gen_engine_item_prop[] {
			$mol_wire_solid()
			return next ?? []
		}

		add_prop( prop: $gen_engine_item_prop ) {
			if( this.props().length < 10 ) {
				return this.props( [ ...this.props(), prop ] )
			}
		}

		remove_prop( id: string ) {
			return this.props( this.props().filter( prop => prop.id !== id ) ).length >= 0
		}

		prop_level_up( id: string ) {
			const prop = this.props().find( prop => prop.id === id )
			if( !prop ) return
			if( prop.level() <= 10 ) {
				return prop.level( prop.level() + 1 )
			}
		}

		// @$mol_mem
		// level( next?: number | undefined ): number {
		// 	$mol_wire_solid()
		// 	const prop_level = this.props().reduce( ( sum, prop ) => sum + prop.level(), 0 )
		// 	return next ?? prop_level
		// }

	}
}
