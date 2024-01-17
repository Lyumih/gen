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

		// @$mol_mem
		// targets_id( next?: string[] ) {
		// 	console.log( next )
		// 	return next ?? []
		// }

		// @$mol_mem_key
		// toggle_target_id( id: string, next?: boolean ): boolean {
		// 	console.log( 'toggle_target_id2', id, next )
		// 	if( next ) {
		// 		this.targets_id( [ ...this.targets_id(), id ] )
		// 	} else {
		// 		this.targets_id( this.targets_id().filter( target_id => target_id !== id ) )
		// 	}
		// 	return next ?? false
		// }

		@$mol_mem_key
		use_attack( id: any, next?: any ) {
			console.log( 'use_attack', id, next )
			console.log()
			this.source( id )?.use_attack( this.party() as $gen_engine_item_unit[], this.battle() )
		}

		@$mol_mem_key
		target_checked( id: any, next?: any ): boolean {
			console.log( 'target_checked', id, next )
			return next ?? false
		}

		// use_attack( next?: any ) {
		// 	console.log( 'use_attack12', this.targets() )
		// 	if( this.targets()?.length > 0 ) {
		// 		this.battle().next_turn()
		// 		this.battle().log_attack( this.unit(), this.targets() as $gen_engine_item_unit[] )
		// 		this.unit().use_attack( this.targets() as $gen_engine_item_unit[], this.battle() )
		// 	}
		// }

		@$mol_mem_key
		use_skill( id: any, skill_id: any, next?: any ) {
			console.log( 'use_skill', id, skill_id, next )
			const source = this.source( id )
			const skill = source?.skills().find( skill => skill.id() === skill_id )
			if( source && skill ) {
				source.use_skill( this.party() as $gen_engine_item_unit[], skill, this.battle() )
			}
			// this.source( next )?.use_skill( this.party() as $gen_engine_item_unit[], this.battle() )
		}

		// @$mol_mem
		// targets( next?: $gen_engine_item_unit[] ): $gen_engine_item_unit[] {
		// 	console.log( 'targets', next, this.targets_id() )
		// 	return this.unit_battle_list().filter( unit => this.targets_id().includes( unit.id() ) )
		// }

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
