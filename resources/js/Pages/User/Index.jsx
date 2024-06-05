import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg fotn-medium text-black">ID</th>
                                        <th className="px-6 py-3 text-left text-lg fotn-medium text-black">Name</th>
                                        <th className="px-6 py-3 text-left text-lg fotn-medium text-black">Email</th>
                                        <th className="px-6 py-3 text-left text-lg fotn-medium text-black">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user)=>(
                                        <tr className="border-b-2" key={user.id}>
                                            <td className="px-6 py-3 text-left text-lg fotn-medium text-black">{user.id}</td>
                                            <td className="px-6 py-3 text-left text-lg fotn-medium text-black">{user.name}</td>
                                            <td className="px-6 py-3 text-left text-lg fotn-medium text-black">{user.email}</td>
                                            <td className="px-6 py-3 text-left text-lg fotn-medium text-black">{user.role}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
