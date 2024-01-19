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

		@$mol_mem
		unit_battle_list( next?: $gen_app_battle_unit[] ): readonly $gen_app_battle_unit[] {
			return next ?? this.party().map( unit => this.Unit( unit.id() ) )
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

		@$mol_mem_key
		target_checked( id: string, next?: boolean ): boolean {
			return next ?? false
		}


		@$mol_mem_key
		use_attack( id: any, next?: any ) {
			const targets = this.party().filter( unit => this.target_checked( unit.id() ) )
			this.source( id )?.use_attack( targets, this.battle() )
		}

		@$mol_mem_key
		use_skill( id: any, skill_id: any, next?: any ) {
			const source = this.source( id )
			const skill = source?.skills().find( skill => skill.id() === skill_id )
			if( source && skill ) {
				const targets = this.party().filter( unit => this.target_checked( unit.id() ) )
				source.use_skill( targets, skill, this.battle() )
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
			console.log( 'move', id, next )
		}

	}
}
