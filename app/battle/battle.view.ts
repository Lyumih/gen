namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

		@$mol_mem
		hero_health( next?: any ) {
			return next ?? 30
		}

		@$mol_mem
		hero_attack( next?: any ) {
			return next ?? 10
		}

		@$mol_mem
		enemy_health( next?: any ) {
			console.log( 'enemy_health', next )
			return next ?? 20
		}

		@$mol_mem
		enemy_attack( next?: any ) {
			return next ?? 5

		}

		use_hero_attack( next?: any ) {
			this.enemy_health( this.enemy_health() - this.hero_attack() )
		}

		use_enemy_attack( next?: any ) {
			this.hero_health( this.hero_health() - this.enemy_attack() )
		}

		restart( next?: any ) {
			this.hero_health( 30 )
			this.enemy_health( 20 )
		}

		is_game_continue() {
			return this.enemy_health() > 0 && this.hero_health() > 0
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
