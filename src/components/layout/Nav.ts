interface NavItem {
    name: string
    href: string
    icon: string
}

export const navigationItems: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: 'home.svg' },
    { name: 'Transactions', href: '/dashboard/transactions', icon: 'transfer.svg' },
    { name: 'Accounts', href: '/dashboard/accounts', icon: 'account.svg' },
    { name: 'Credit Cards', href: '/dashboard/credit-cards', icon: 'card.svg' },
    { name: 'Investments', href: '/dashboard/investments', icon: 'investment.svg' },
    { name: 'Loans', href: '/dashboard/loans', icon: 'loan.svg' },
    { name: 'Services', href: '/dashboard/services', icon: 'service.svg' },
    { name: 'My Privileges', href: '/dashboard/privileges', icon: 'previlage.svg' },
    { name: 'Settings', href: '/dashboard/settings', icon: 'cog.svg' },
]