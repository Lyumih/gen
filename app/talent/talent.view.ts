namespace $.$$ {
	export class $gen_app_talent extends $.$gen_app_talent {

		x_list() {
			return this.max_y_count().map( ( x ) => this.Y( x ) )
		}

		y_list( id_x: string ) {
			return this.max_x_count().map( ( y ) => this.Talent( `${ id_x }_${ y }` ) )
		}

		max_x_count() {
			return this.array_range( this.max_x_y().x )
		}

		max_y_count() {
			return this.array_range( this.max_x_y().y )
		}

		array_range( length: number ) {
			return Array.from( { length }, ( _, index ) => index )
		}

		light() {
			return 15
		}

		max_x_y() {
			let x = 1
			let y = 1
			this.common_talents().forEach( talent => {
				x = Math.max( x, talent.x() )
				y = Math.max( y, talent.y() )
			} )
			return {
				x: x + this.light(),
				y: y + this.light()
			}
		}

		get_talent_id( id_y_x: string ) {
			const [ id_x, id_y ] = id_y_x.split( '_' )
			return this.common_talents()
				.find( talent => talent.x() === +id_x && talent.y() === +id_y )
		}

		talent_click( id: any, next?: any ) {
			const talent = this.get_talent_id( id )
			console.log( talent, id )
		}

		talent_short_name( id: any ): string {
			return this.get_talent_id( id )?.name()?.slice( 0, 4 ) ?? ''
		}

		talent_description( id: any ): string {
			return this.get_talent_id( id )?.description() ?? ''
		}

		@$mol_mem
		common_talents() {
			const talent1 = new this.$.$gen_engine_item_talent_all().all()[ 0 ]
			const talent2 = new this.$.$gen_engine_item_talent_all().all()[ 1 ]
			talent2.set_x_y( 2, 3 )
			return [ talent1, talent2 ]
		}

	}
}
