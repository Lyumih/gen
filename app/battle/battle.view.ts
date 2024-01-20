namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

		pages_list(): readonly any[] {
			if( this.battle_status() === '' ) {
				return [ this.Party_page() ]
			} else {
				return [ this.History_page(), this.Battle_page() ]
			}
		}

		start_battle( next?: any ) {
			this.battle_status( 'pending' )
		}

		end_battle( next?: any ) {
			this.battle_status( '' )
		}

		turn(): string {
			return `Ход: ${ this.battle().turn() }`
		}

		restart() {
			// this.hero().refill()
			// this.enemy().refill()
			this.battle().turn( 0 )
		}

		party_list(): readonly any[] {
			return this.party_new().map( unit => this.Party( unit.id() ) )
		}

		party(): readonly $gen_engine_item_unit[] {
			return this.party_new().filter( unit => this.party_new_checked( unit.id() ) )
		}

		get_party_hero( id: string ) {
			return this.party_new().find( unit => unit.id() === id )
		}

		party_unit_name( id: string ): string {
			return this.get_party_hero( id )?.name() || 'no name'
		}

		source( id: string ) {
			return this.get_party_hero( id )
		}

		attack_enabled( next?: any ): boolean {
			const [ x = 0, y = 0 ] = this.preview_cell().split( '_' )
			return Boolean( this.preview_unit() && this.active_unit().in_range( +x, +y, this.active_unit().attack_range() ) )
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

		move_enabled( next?: any ): boolean {
			console.log( 'move_enabled', next )
			const [ x = 0, y = 0 ] = this.preview_cell().split( '_' )
			const target_cell = this.party().some( unit => unit.x() === +x && unit.y() === +y )
			const unit = this.active_unit()
			const unit_in_range_move = unit.in_range( +x, +y, unit.speed() )
			return Boolean( !target_cell && unit && unit_in_range_move )
		}

		move( id: string, next?: any ) {
			next?.preventDefault()
			const [ x = 0, y = 0 ] = this.preview_cell().split( '_' )
			const target_cell = this.party().some( unit => unit.x() === +x && unit.y() === +y )
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
			this.preview_cell( '' )
			// this.battle().next_turn()
		}

		cell_click( next?: any ) {
			const [ x, y ] = next.split( '_' )
			console.log( 'cell_click', next, x, y )
			this.preview_cell( this.preview_cell() === next ? '' : next )
		}

		debug(): string {
			return '' + this.preview_unit()?.x() + this.preview_unit()?.y() + this.preview_cell()
		}


	}
}
