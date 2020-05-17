/**
 * mod.ts テストコード
 */

 import { assertEquals } from "./test_deps.ts";
 import { getHelloWorld } from "./mod.ts";

 Deno.test({
     name: "hello module",
     fn(): void {
         assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
     }
 });
 