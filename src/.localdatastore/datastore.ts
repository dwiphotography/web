
import { createServerFn } from "@tanstack/react-start";

export const getData = createServerFn().handler(async () => {
    const { supabaseServer } = await import('../server/supabase.server');

    const keys = [
        "index",
        "partners",
        "services:index",
        "services:studio",
        "services:wedding",
        "services:prewedding",
    ];
    
    const { data, error } = await supabaseServer
        .from('datastore')
        .select('*')
        .in('key', keys)
    
    if (error) {
        throw Error(error.message);
    }
    
    return data;
});
