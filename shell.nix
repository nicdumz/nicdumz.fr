{
  pkgs ? import <nixpkgs> { },
  system ? builtins.currentSystem,
  ...
}:
let
  gems = pkgs.bundlerEnv {
    name = "gems-for-some-project";
    gemdir = ./.;
  };
  src = fetchTarball "https://github.com/numtide/devshell/archive/main.tar.gz";
  devshell = import src { inherit system; };
in
devshell.mkShell {
  packages = [
    gems
    (pkgs.lib.lowPrio gems.wrappedRuby)
    pkgs.bundix
    pkgs.nodejs
    pkgs.pnpm
    # (pkgs.ruby.withPackages (ps: with ps; [ bundix ]))
  ];
  commands = [
    {
      name = "serve";
      help = "Serve a local version of the website";
      command = ''
        bundle install
        pnpm install
        bundle exec jekyll serve --livereload
      '';
    }
  ];
}
