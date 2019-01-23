source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.3.1"

gem "bootsnap", ">= 1.1.0", require: false
gem "jbuilder", "~> 2.5"
gem "puma", "~> 3.11"
gem "rails"
gem "sass-rails"
gem "uglifier"
gem "bootstrap-sass"
gem "config"
gem "mysql2"

group :development, :test do
  gem "byebug"
  gem "faker"
  gem "factory_bot_rails"
  gem "pry-rails"
  gem "pry-byebug"
  gem "sqlite3"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "pg"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "rspec-rails"
end

gem "tzinfo-data", platforms: %i(mingw mswin x64_mingw jruby)
