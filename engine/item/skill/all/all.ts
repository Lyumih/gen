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
				this.heal()
			]
		}

		heal() {
			const text = `
				source.health( source.health() + 10 )
				battle.log(source.name() + ''+ ' исцеляется на 10 здоровья' )
			`
			return $gen_engine_item_skill.make( {

				defaults_patch: () => ( {
					name: 'Хил',
					description: 'Исцеляет на 10 здоровья',
					use_plain: text,
				} ),
				id: 'skill-heal-1',
			} )
		}
		// const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
		// skill.name( 'Хил' )
		// skill.description( 'Исцеляет на 10 здоровья' )
		// skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
		// 	source.health( source.health() + 10 )
		// 	battle.log( `${ source.name() } исцеляется на 10 здоровья` )
		// }
		// return skill
		// }

		strong_attack() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.level( 12 )
			// skill.name( 'Сильный удар' )
			// skill.description( 'Урон x2' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				if( targets[ 0 ] ) {
					targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 2 )
					battle.log( `${ source.name() } наносит сильный удар х2` )
				}
				battle.log_targets_not_found( source )
			}
			return skill
		}

		strong_attack_and_heal() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.name( 'Сильный удар и самолечение' )
			// skill.level( 44 )
			// skill.description( 'Урон x4 и лечение себя на 10' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				const target = targets[ 0 ]
				if( target ) {
					targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 4 )
					source.health( source.health() + 10 )
					battle.log( `${ source.name() } наносит сильный удар х4 и лечение себя на 10` )
				} else {
					battle.log_targets_not_found( source )
				}
			}
			return skill
		}

		hyperfocal_madness_wind_generator() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.reference( 'nin-jin' )
			// skill.name( 'Гиперфокальный ветрогенератор безумия' )
			// skill.level( 5 )
			// skill.description( '5% вероятность сделать бум при попытке взаимодействия с меметичными объектами.' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				const debuff_mem = new $gen_engine_item_buff( $mol_guid( 4 ) )
				debuff_mem.name( 'mem' )
				debuff_mem.part( 'debuff' )
				const target = targets[ 0 ]
				if( target ) {
					target.buffs( [ ...target.buffs(), debuff_mem ] )
					if( Math.random() < 0.5 ) {
						battle.log( `${ source.name() } сделал бум при попытке взаимодействия с меметичными объектами` )
						target.health( target.health() - source.attack() * 999 )
					} else {
						battle.log( `${ source.name() } не смог сделать бум при попытке взаимодействия с меметичными объектами` )
					}
				} else {
					battle.log_targets_not_found( source )
				}
			}
			return skill
		}

		teleport() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.name( 'Телепорт' )
			// skill.reference( 'Mario' )
			// skill.level( 7 )
			// skill.description( 'Телепортация к цели' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				battle.log( `${ source.name() } телепортируется на 2 клетки` )
				source.x( source.x() + 2 )
				source.y( source.y() + 2 )
			}
			return skill
		}

		gravity_shield() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.reference( 'Mario' )
			// skill.name( 'Гравитационный щит' )
			// skill.level( 7 )
			// skill.description( 'Щит от воздействия гравитации' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				battle.log( `${ source.name() } получает гравитационный щит` )
				source.health( source.health() + 50 )
			}
			return skill
		}

		lightning_spear() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.reference( 'Mario' )
			// skill.name( 'Молниеносный копье' )
			// skill.level( 12 )
			// skill.description( 'Наносит x3 урона копьём молнией' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				const target = targets[ 0 ]
				if( target ) {
					battle.log( `${ source.name() } наносит ${ source.attack() * 3 } урона копьём молнией` )
					targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 3 )
				} else {
					battle.log_targets_not_found( source )
				}
			}
			return skill
		}

		lightning_bolt() {
			const skill = new $gen_engine_item_skill( $mol_guid( 4 ) )
			// skill.reference( 'Mario' )
			// skill.name( 'Шаровые молнии' )
			// skill.level( 16 )
			// skill.description( 'Запускает до 4 шаровых молний в цель' )
			skill.use = ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) => {
				const target = targets[ 0 ]
				if( target ) {
					const number_balls = +( Math.random() * 100 % 4 ).toFixed()
					battle.log( `${ source.name() } наносит ${ source.attack() * number_balls } урона ${ number_balls } шаровыми молниями` )
					targets[ 0 ].health( targets[ 0 ].health() - source.attack() * number_balls )
				} else {
					battle.log_targets_not_found( source )
				}
			}
			return skill
		}
	}
}
