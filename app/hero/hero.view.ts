namespace $.$$ {
	export class $gen_app_hero extends $.$gen_app_hero {
		name(): string {
			return `Имя: ${ this.get_active_hero()?.name() }`
		}

		get_active_hero() {
			return this.party().find( unit => unit.id() === this.active_hero() )
		}

		@$mol_mem
		active_hero( next?: any ): string {
			return next ?? this.party()[ 0 ]?.id()
		}

		start_battle( next?: any ) {
			console.log( 'start battle' )
			// Тут надо как-то передать в gen_app_battle 
			// Выбранного героя
		}


		equipment_list(): readonly any[] {
			return this.engine().hero_equipments().map( item => this.Equipment( item.id ) )
		}

		get_equipment( id: string ) {
			return this.engine().hero_equipments().find( item => item.id === id )
		}

		equipment_unequip( id: any, next?: any ) {
			this.engine().hero_unequip( id )
		}

		skill_points(): string {
			return `Очков умений: ${ this.engine().hero().point.skill }`
		}

		skills() {
			return `Умения: ${ JSON.stringify( this.engine().hero_skills, null, 2 ) }`
		}

		skill_list(): readonly any[] {
			return this.engine().hero_skills().map( skill => this.Skill( skill.id ) )
		}

		get_skill( id: string ) {
			return this.engine().hero_skills().find( skill => skill.id === id )
		}

		skill_level_up( id: string, next?: any ) {
			this.engine().skill_level_up( id )
		}

		skill_mode( id: any ): string {
			return this.get_skill( id )?.name || 'no mode'
		}

		skill_add_mode( id: string, next?: any ) {
			const mode = this.engine().all_mode()
		}

		skill_unequip( id: any, next?: any ) {
			this.engine().skill_unequip( id )
		}

		inventory_list(): readonly any[] {
			return this.engine().inventory().map( item => this.Inventory_item( item.id ) )
		}

		get_inventory_item( id: string ) {
			return this.engine().inventory().find( item => item.id === id )
		}

		inventory_item_sell( id: any, next?: any ) {
			this.engine().inventory_sell( id )
		}

		inventory_equip( id: any, next?: any ) {
			this.engine().inventory_equip( id )
		}

		shop_list(): readonly any[] {
			return this.engine().shop().map( item => this.Shop_item( item.id ) )
		}

		get_shop_item( id: string ) {
			return this.engine().shop().find( item => item.id === id )
		}

		shop_item_bue( id: any, next?: any ) {
			this.engine().shop_buy( id )
		}


		party() {
			return this.common_party()
		}

		party_list() {
			return this.party().map( unit => this.Party( unit.id() ) )
		}

		get_party_hero( id: string ) {
			return this.party().find( unit => unit.id() === id )
		}

		party_hero_name( id: string ): string {
			return this.get_party_hero( id )?.name() || 'no name'
		}

		party_hero_pick( id: string, next?: any ) {
			console.log( id, next )
			this.active_hero( id )
		}

		@$mol_mem
		common_party() {
			return [
				this.$.$gen_engine_unit.make( { id: () => '112233', name: () => 'Вася' } ),
				this.$.$gen_engine_unit.make( { name: () => 'Даша' } ),
				this.$.$gen_engine_unit.make( {} ),
			]
		}

	}
}
