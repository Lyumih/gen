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

		@$mol_mem_key
		target_checked( id: string, next?: boolean ): boolean {
			return next ?? false
		}


		@$mol_mem
		use_attack( next?: any ) {
			console.log( 'use_attack', next )
			const targets = this.party().filter( unit => unit.id() === this.preview_id() )
			this.active_unit()?.use_attack( targets, this.battle() )
			this.end_turn()
		}

		@$mol_mem_key
		use_skill( id: any, skill_id: any, next?: any ) {
			const source = this.active_unit()
			const skill = source?.skills()?.find( skill => skill.id() === id )
			console.log( 'use skill', id, skill_id, next, skill )
			if( source && skill ) {
				const targets = this.party().filter( unit => unit.id() === this.preview_id() )
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
			console.log( 'move', id, next, this.preview_id(), this.active_id() )
			const [ x = 0, y = 0 ] = id.split( '_' )
			const target_cell = this.party().some( unit => unit.x() === +x && unit.y() === +y )
			console.log( 'target_cell', target_cell, x, y )
			const unit = this.active_unit()
			if( !target_cell && unit ) {
				unit.move( +x, +y )
				this.end_turn()
				this.battle().log_move( unit, +x, +y )
			}
		}

		@$mol_mem
		active_id( next?: any ): string {
			return next ?? this.party()[ 0 ].id()
		}

		@$mol_mem
		active_unit( next?: $gen_engine_item_unit ) {
			return next ?? this.get_party_hero( this.active_id() )
		}

		@$mol_mem
		preview_unit( next?: any ) {
			return next ?? this.get_party_hero( this.preview_id() )
		}

		end_turn( next?: any ) {
			const index = this.party().findIndex( unit => unit.id() === this.active_id() )
			console.log( index )
			let nextId = ''
			if( index === -1 || index === this.party().length - 1 ) {
				nextId = this.party()[ 0 ].id()
			} else {
				nextId = this.party()[ index + 1 ].id()
			}
			this.active_id( nextId )
			this.preview_id( "" )
			this.battle().next_turn()
		}


	}
}
