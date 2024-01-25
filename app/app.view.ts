namespace $.$$ {
	export class $gen_app extends $.$gen_app {

		clear_storage( next?: any ) {
			console.log( 'clear storage' )
			localStorage.clear()
		}

		// @$mol_mem
		// party( next?: $gen_engine_item_unit[] ): readonly $gen_engine_item_unit[] {
		// 	// return this.user().units( next )
		// 	return this.user().units()
		// }

		// active_hero( next?: any ): $gen_engine_item_unit {
		// 	return next ?? this.party()[ 0 ]
		// }

		@$mol_mem
		user( next?: $gen_engine_user ): $gen_engine_user {
			return next ?? new $gen_engine_user_all().misha()
		}

		@$mol_mem
		debug_user(): string {
			return `${ this.user().name() } #${ this.user().id } \$${ this.user().id_root() } ${ this.user().units_data().length }`
		}

		// user_name( next?: any ): string {
		// 	return this.user().name( next )
		// }

		// add_unit( next?: any ) {
		// 	const unit = new $gen_engine_item_unit( $mol_guid( 4 ) )
		// 	console.log( unit, unit.id, unit.id_root() )
		// 	this.user().add_unit( unit.defaults() )
		// 	// this.user().units( [ ...this.user().units(), unit.data() ] )
		// 	// this.user().units( [ ...this.user().units() ] )
		// }

		// remove_unit() {
		// 	this.user().remove_first()
		// }

		// @$mol_mem
		// units() {
		// 	return this.user().units()
		// }

		// unit_list(): readonly any[] {
		// 	return this.units().map( unit => this.Unit_name( unit.id_root() ) )
		// }

		// get_unit( id: string ) {
		// 	return this.units().find( unit => unit.id_root() === id )
		// }

		// unit_name( id: any, next?: any ): string {
		// 	return this.get_unit( id )?.name( next ) ?? ''
		// }


	}
}
