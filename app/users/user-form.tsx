"use client";

import { useActionState } from "react";
import { createUserAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function UserForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        createUserAction,
        undefined
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New User</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select
                            name="role"
                            required
                            items={[
                                { value: "ADMIN", label: "Admin" },
                                { value: "MANAGER", label: "Manager" },
                                { value: "OPERATIONS", label: "Operations" },
                                { value: "FINANCE", label: "Finance" },
                            ]}
                        >
                            <SelectTrigger id="role" className="w-full">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ADMIN">Admin</SelectItem>
                                <SelectItem value="MANAGER">Manager</SelectItem>
                                <SelectItem value="OPERATIONS">Operations</SelectItem>
                                <SelectItem value="FINANCE">Finance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {errorMessage && (
                        <p className="text-sm text-destructive">{errorMessage}</p>
                    )}

                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Creating..." : "Create User"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}