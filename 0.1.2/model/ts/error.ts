import { Int } from 'apikana/default-types'

export type Error = {
    /**
     * The error code.
     */
    code: Int

    /**
     * A human-readable description of the error.
     */
    message: string;

};