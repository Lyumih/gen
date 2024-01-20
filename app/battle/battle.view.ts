namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {
		turn(): string {
			return `Ход: ${ this.battle().turn() }`
		}

		restart() {
			// this.hero().refill()
			// this.enemy().refill()
			this.battle().turn( 0 )
		}

		party_list(): readonly any[] {
			return this.party().map( unit => this.Party( unit.id() ) )
		}

		get_party_hero( id: string ) {
			return this.party().find( unit => unit.id() === id )
		}

		party_unit_name( id: string ): string {
			return this.get_party_hero( id )?.name() || 'no name'
		}

		source( id: string ) {
			return this.get_party_hero( id )
		}

		@$mol_mem
		use_attack( next?: any ) {
			console.log( 'use_attack', next )
			const targets = this.party().filter( unit => unit.id() === this.preview_unit()?.id() )
			this.active_unit()?.use_attack( targets, this.battle() )
			this.end_turn()
		}

		@$mol_mem_key
		use_skill( id: any, skill_id: any, next?: any ) {
			const source = this.active_unit()
			const skill = source?.skills()?.find( skill => skill.id() === id )
			console.log( 'use skill', id, skill_id, next, skill )
			if( source && skill ) {
				const targets = this.party().filter( unit => unit.id() === this.preview_unit()?.id() )
				source.use_skill( targets, skill, this.battle() )
				this.end_turn()
			}
		}

		get_reward( next?: any ) {
			this.engine().inventory( [ ...this.engine().inventory(), this.engine().reward() ] )
			this.restart()
		}

		history(): string {
			return this.battle().history().reverse().join( '\n' )
		}

		move( id: string, next?: any ) {
			next?.preventDefault()
			console.log( 'move', id, next, this.active_unit(), this.preview_unit() )
			const [ x = 0, y = 0 ] = this.preview_cell().split( '_' )
			const target_cell = this.party().some( unit => unit.x() === +x && unit.y() === +y )
			console.log( 'target_cell', target_cell, x, y )
			const unit = this.active_unit()
			const unit_in_range_move = unit.in_range( +x, +y, unit.speed() )
			if( !target_cell && unit && unit_in_range_move ) {
				unit.move( +x, +y )
				this.end_turn()
				this.battle().log_move( unit, +x, +y )
			}
		}
		@$mol_mem
		active_unit( next?: $gen_engine_item_unit ) {
			return next ?? this.party()[ 0 ]
		}

		@$mol_mem
		preview_unit( next?: $gen_engine_item_unit ) {
			const [ x, y ] = this.preview_cell().split( '_' )
			return next ?? this.party().find( unit => unit.x() === + x && unit.y() === + y )
		}

		end_turn( next?: any ) {
			const index = this.party().findIndex( unit => unit.id() === this.active_unit()?.id() )
			console.log( index )
			let nextUnit = null
			if( index === -1 || index === this.party().length - 1 ) {
				nextUnit = this.party()[ 0 ]
			} else {
				nextUnit = this.party()[ index + 1 ]
			}
			this.active_unit( nextUnit )
			// this.preview_unit( undefined )
			this.preview_cell( '' )
			// this.active_id( nextId )
			// this.preview_id( "" )
			this.battle().next_turn()
		}

		cell_click( next?: any ) {
			const [ x, y ] = next.split( '_' )
			console.log( 'cell_click', next, x, y )
			this.preview_cell( this.preview_cell() === next ? '' : next )

			// const unit_in_cell = this.party().find( unit => unit.x() === +x || unit.y() === +y )
			// if( unit_in_cell ) {
			// 	console.log( 'unit в клетке' )
			// 	this.preview_cell( next )
			// 	this.preview_unit( unit_in_cell )
			// } else {
			// 	console.log( 'пустая клетка' )
			// 	this.move( next )
			// }
		}

		debug(): string {
			return '' + this.preview_unit()?.x() + this.preview_unit()?.y() + this.preview_cell()
		}


	}
}
