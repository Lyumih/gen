namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

		@$mol_mem
		battle() {
			const battle = new this.$.$gen_engine_battle()
			battle.units( this.default_units() )
			return battle
		}

		default_units() {
			return [
				new this.$.$gen_engine_unit(),
				new this.$.$gen_engine_unit()
			]
		}

		turn(): string {
			return `Ход: ${ this.battle().turn() }`
		}

		@$mol_mem
		hero() {
			return this.battle().units()[ 0 ]
		}

		@$mol_mem
		enemy() {
			return this.battle().units()[ 1 ]
		}

		use_hero_attack( next?: any ) {
			this.battle().next_turn()
			this.hero().use_attack( this.enemy() )
		}

		use_enemy_attack( next?: any ) {
			this.enemy().use_attack( this.hero() )
		}

		restart() {
			this.hero().refill()
			this.enemy().refill()
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
