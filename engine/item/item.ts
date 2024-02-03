namespace $ {
	/**
	 * Основной класс для создания различных предметов (умения, предметы и т.д.)
	 */
	export class $gen_engine_item extends $gen_engine_entity {

		defaults() {
			return {
				// id: $mol_guid(),
				id_root: 'id-root-' + $mol_guid(),
				name: 'no name',
				icon: '📦',
				reference: '',
				type: 'item',
				part: 'part',
				description: 'no description',
				level: 0,
				points: 0,
				x: 0,
				y: 0,
				speed: 1,
				attack_range: 1
			}
		}

		factory() {

		}

		/** Корневой id предмета (юнита). Используется, если оно было создано на основе какой-то другой базы */
		id_root( next?: string ) {
			return this.value( 'id_root', next )
		}

		log( text: string ) {
		}

		/** Источник вдохновения */
		reference( next?: string ) {
			return this.value( 'reference', next )
		}

		/** Тип предмета: unit/skill/equipment/prop/talent */
		type( next?: string ) {
			return this.value( 'type', next )
		}

		/** конкретная часть от type: для equipment: weapon/armor/head/gloves, для unit: hero/enemy/summon и т.д. */
		part( next?: string ) {
			return this.value( 'part', next )
		}

		/** Имя предмета */
		name( next?: string ) {
			return this.value( 'name', next )
		}

		/** Отображаемая иконка. Например: 🧙🏼‍♂️ */
		icon( next?: string ) {
			return this.value( 'icon', next )
		}

		/** Иконка с именем. Например: 🧙🏼‍♂️Jin */
		icon_name( next?: string ) {
			return this.icon() + this.name()
		}

		/** описание предмета */
		description( next?: string ) {
			return this.value( 'description', next )
		}

		/** уровень предмета */
		level( next?: number ) {
			return this.value( 'level', next )
		}

		/** Быстрое отображение иконки с уровнем. Например: ⭐4 */
		icon_level() {
			return '⭐' + this.level()
		}

		/** Свободные очки чего-либо для предмета, которые можно израсходовать на улучшение */
		points( next?: number ) {
			return this.value( 'points', next )
		}

		/** Быстрое отображение иконки с очками. Например: 💎5 */
		icon_points() {
			return '💎' + this.points()
		}

		/** Координаты предмета x. Для инвентаря это ячейка в инвентаре, для юнита это координаты на поле */
		x( next?: number ) {
			return this.value( 'x', next )
		}

		/** Координаты предмета y. Для инвентаря это ячейка в инвентаре, для юнита это координаты на поле */
		y( next?: number ) {
			return this.value( 'y', next )
		}

		xy() {
			return [ this.x(), this.y() ]
		}

		in_range( x: number, y: number, range: number ) {
			return Math.abs( this.x() - x ) <= range && Math.abs( this.y() - y ) <= range
		}

		/** Скорость предмета. Для персонажа - это дальность перемещения в клетках */
		speed( next?: number ) {
			return this.value( 'speed', next )
		}

		icon_speed() {
			return '👟' + this.speed()
		}

		//** Дальность атаки для персонажа, оружия, умения */
		attack_range( next?: number ) {
			return this.value( 'attack_range', next )
		}

		icon_attack_range() {
			return '🏹' + this.attack_range()
		}

		move( x: number, y: number ) {
			if( this.x() !== x || this.y() !== y ) {
				this.x( x )
				this.y( y )
			}
		}

	}
}
