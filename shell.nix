{
  pkgs ? import <nixpkgs> { },
  system ? builtins.currentSystem,
  ...
}:
let
  src = fetchTarball "https://github.com/numtide/devshell/archive/main.tar.gz";
  devshell = import src { inherit system; };
in
devshell.mkShell {
  packages = [
    pkgs.nodejs_24
    pkgs.pnpm
  ];
  commands = [
    {
      name = "serve";
      help = "Serve a local version of the website";
      command = ''
        pnpm install
        pnpm run serve
      '';
    }
    {
      name = "build";
      help = "Build the website";
      command = ''
        pnpm install
        pnpm run build
      '';
    }
  ];
}
