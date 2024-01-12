namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

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
			const hero = new this.$.$gen_engine_unit()
			this.battle().init_unit( hero )
			return hero
		}

		@$mol_mem
		enemy() {
			const enemy = new this.$.$gen_engine_unit()
			this.battle().init_unit( enemy )
			return enemy
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
