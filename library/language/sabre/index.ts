/// Website Modules
import { Product } from '@rroessler/product';

/// Local Modules
import { Grammar } from '../grammar';

export namespace Sabre {
    //  PROPERTIES  //

    /** Sabre title value. */
    export const title = 'Sabre';

    /** Sabre identifier value. */
    export const identifier = title.toLowerCase();

    /** Sabre website resource. */
    export const website = `https://${identifier}.${Product.title}`;

    //  PUBLIC METHODS  //

    /** Handles getting the underlying grammar. */
    export async function grammar(): Promise<Grammar> {
        return fetch(`${website}/syntax.json`).then((res) => res.json());
    }
}
