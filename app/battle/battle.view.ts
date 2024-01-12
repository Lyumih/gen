namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {

		@$mol_mem
		history( next?: any ) {
			return next ?? []
		}

		@$mol_mem
		hero( next?: any ) {
			return next ?? {
				type: 'hero',
				health: 20,
				attacK: 5,
			}
		}

		@$mol_mem
		enemy( next?: any ) {
			console.log( 'enemy', next )
			return next ?? {
				type: 'enemy',
				health: 20,
				attack: 5,
			}
		}

		enemy_health() {
			return "" + this.enemy().health
		}

		hero_attack( next?: any ) {
			const hero = this.hero()
			const enemy = this.enemy()
			enemy.health -= hero.attacK
			this.enemy( enemy )
			console.log( hero, enemy )
			this.history( [ ...this.history(), [ 'attack', hero, enemy ] ] )
		}

	}
}
