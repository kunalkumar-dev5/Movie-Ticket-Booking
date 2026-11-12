import { LayoutDashboardIcon, ListIcon, PlusSquareIcon, TicketCheckIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: TicketCheckIcon },
]

const AdminSidebar = () => {
    const user = {
        firstName: 'Admin',
        lastName: 'User',
        imageUrl: assets.profile,
    }

    return (
        <aside className='sticky top-16 flex h-[calc(100vh-4rem)] w-[76px] shrink-0 flex-col items-center border-r border-white/10 bg-[#0d0e13] px-2 py-6 text-sm md:w-64 md:items-stretch md:px-4'>
            <div className='mb-8 flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:flex-row md:justify-start md:px-3'>
                <div className='relative shrink-0'>
                    <img
                        className='h-10 w-10 rounded-full object-cover ring-2 ring-primary/40 md:h-11 md:w-11'
                        src={user.imageUrl}
                        alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d0e13] bg-emerald-400' />
                </div>
                <div className='hidden min-w-0 md:block'>
                    <p className='truncate font-medium text-white'>{user.firstName} {user.lastName}</p>
                    <p className='mt-0.5 text-xs text-gray-400'>Administrator</p>
                </div>
            </div>

            <nav aria-label='Admin navigation' className='flex w-full flex-col gap-1.5'>
                {adminNavlinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === '/admin'}
                        title={link.name}
                        aria-label={link.name}
                        className={({ isActive }) => `group relative flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 md:justify-start ${isActive
                            ? 'bg-primary/15 text-primary'
                            : 'text-gray-400 hover:bg-white/[0.06] hover:text-white'
                            }`}
                    >
                        {({ isActive }) => (
                            <>
                                <link.icon className='h-5 w-5 shrink-0 transition-transform group-hover:scale-110' />
                                <span className='hidden flex-1 text-left md:block'>{link.name}</span>
                                {isActive && (
                                    <span className='absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary' />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
            <div className='mt-auto hidden w-full border-t border-white/10 pt-5 md:block'>
                <div className='rounded-xl bg-gradient-to-br from-primary/20 via-white/[0.04] to-transparent p-4'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-primary'>Movie Ticket Admin</p>
                    <p className='mt-2 text-xs leading-relaxed text-gray-400'>
                        Manage shows and bookings from one place.
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default AdminSidebar
