namespace $ {
	export class $gen_engine_item_skill_all extends $mol_object {
		@$mol_mem
		all(): $gen_engine_item_skill[] {
			return this.resource()
		}

		create_id_root( id_root: string ) {
			return `skill-${ id_root }`
		}

		resource(): $gen_engine_item_skill[] {
			return [
				this.heal(), this.strong_attack(), this.strong_attack_and_heal(), this.hyperfocal_madness_wind_generator(),
			]
		}

		heal() {
			const skill = new $gen_engine_item_skill()
			skill.name( 'Хил' )
			skill.description( 'Исцеляет на 10 здоровья' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) => {
				source.health( source.health() + 10 )
			}
			return skill
		}

		strong_attack() {
			const skill = new $gen_engine_item_skill()
			skill.level( 12 )
			skill.name( 'Сильный удар' )
			skill.description( 'Урон x2' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) => {
				targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 2 )
			}
			return skill
		}

		strong_attack_and_heal() {
			const skill = new $gen_engine_item_skill()
			skill.name( 'Сильный удар и самолечение' )
			skill.level( 44 )
			skill.description( 'Урон x4 и лечение себя на 10' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) => {
				targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 4 )
				source.health( source.health() + 10 )
			}
			return skill
		}

		hyperfocal_madness_wind_generator() {
			const skill = new $gen_engine_item_skill()
			skill.reference( 'nin-jin' )
			skill.name( 'Гиперфокальный ветрогенератор безумия' )
			skill.level( 5 )
			skill.description( '5% вероятность сделать бум при попытке взаимодействия с меметичными объектами.' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) => {
				const debuff_mem = new this.$.$gen_engine_item_skill
				// debuff_mem.name( 'mem' )
				// debuff_mem.part( 'debuff' )
				// targets[ 0 ].buffs( [ ...targets[ 0 ].buffs(), debuff_mem ] )
				if( Math.random() < 0.25 ) {
					targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 999 )
				}
			}
			return skill
		}


	}
}
