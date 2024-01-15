namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

		default_units() {
			const units = [
				...$gen_app_battle.call_unit(),
				$gen_engine_unit.make( {} ),
				$gen_engine_unit.make( {} )
			]
			units.forEach( unit => unit.next_turn = () => this.battle().next_turn() )
			return units
		}

		@$mol_mem
		static call_unit( next?: $gen_engine_unit[] ) {
			return next ?? []
		}

		turn(): string {
			return `Ход: ${ this.battle().turn() }`
		}

		@$mol_mem
		hero() {
			return this.default_units()[ 0 ]
		}

		@$mol_mem
		enemy() {
			return $gen_engine_unit.make( {
				next_turn: () => this.battle().next_turn(),
			} )
		}

		use_hero_attack( next?: any ) {
			this.hero().use_attack( this.enemy() )
		}

		use_enemy_attack( next?: any ) {
			this.enemy().use_attack( this.hero() )
		}

		restart() {
			this.hero().refill()
			this.enemy().refill()
			this.battle().turn( 0 )
		}

		is_game_continue() {
			return !this.hero().is_dead() && !this.enemy().is_dead()
		}

		is_game_end() {
			return !this.is_game_continue()
		}

		end(): string {
			return this.is_game_continue() ? '' : 'Игра закончена'
		}

		get_reward( next?: any ) {
			this.engine().inventory( [ ...this.engine().inventory(), this.engine().reward() ] )
			this.restart()
		}

	}
}
