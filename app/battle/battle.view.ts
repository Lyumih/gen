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

		unit_battle_list(): readonly any[] {
			return this.party().map( unit => this.Unit( unit.id() ) )
		}

		source( id: string ) {
			return this.get_party_hero( id )
		}

		// is_game_continue() {
		// 	return !this.hero().is_dead() && !this.enemy().is_dead()
		// }

		// is_game_end() {
		// 	return !this.is_game_continue()
		// }

		// end(): string {
		// 	return this.is_game_continue() ? '' : 'Игра закончена'
		// }

		@$mol_mem
		targets_id( next?: string[] ) {
			console.log( next )
			return next ?? []
		}

		@$mol_mem_key
		toggle_target_id( id: string, next?: boolean ): boolean {
			console.log( 'toggle_target_id2', id, next )
			if( next ) {
				this.targets_id( [ ...this.targets_id(), id ] )
			} else {
				this.targets_id( this.targets_id().filter( target_id => target_id !== id ) )
			}
			return next ?? false
		}

		targets() {
			console.log( 'targets' )
			return this.unit_battle_list().filter( unit => this.targets_id().includes( unit.id() ) )
		}

		get_reward( next?: any ) {
			this.engine().inventory( [ ...this.engine().inventory(), this.engine().reward() ] )
			this.restart()
		}

		history(): string {
			console.log( this.battle().history() )
			return this.battle().history().reverse().join( '\n' )
		}

	}
}
