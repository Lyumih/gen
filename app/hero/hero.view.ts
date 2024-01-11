namespace $.$$ {
	export class $gen_app_hero extends $.$gen_app_hero {
		name(): string {
			return `Имя: ${ this.engine().hero().name }`
		}

		equipment_list(): readonly any[] {
			return this.engine().hero_equipments().map( item => this.Equipment( item.id ) )
		}

		get_equipment( id: string ) {
			return this.engine().hero_equipments().find( item => item.id === id )
		}

		equipment_name( id: string ): string {
			return this.get_equipment( id )?.name || 'no equipment'
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

		skill_name( id: string ): string {
			return `Умение: ${ this.get_skill( id )?.name }`
		}

		skill_level( id: any ): string {
			return `Уровень: ${ this.get_skill( id )?.level || '-' }`
		}

		skill_level_up( id: string, next?: any ) {
			this.engine().skill_level_up( id )
			this.skill_level( id )
		}

		skill_mode( id: any ): string {
			return this.get_skill( id )?.name || 'no mode'
		}

		skill_add_mode() {
			const mode = this.engine().all_mode()
		}

		skill_unequip( id: any, next?: any ) {
			console.log( id )
			this.engine().skill_unequip( id )
		}

		inventory_list(): readonly any[] {
			return this.engine().inventory().map( item => this.Inventory_item( item.id ) )
		}

		get_inventory_item( id: string ) {
			return this.engine().inventory().find( item => item.id === id )
		}

		inventory_item_name( id: any ): string {
			return this.get_inventory_item( id )?.name || 'no item'
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

		shop_item_name( id: any ): string {
			return this.get_shop_item( id )?.name || 'no shop item'
		}

		shop_item_bue( id: any, next?: any ) {
			this.engine().shop_buy( id )
		}

	}
}
