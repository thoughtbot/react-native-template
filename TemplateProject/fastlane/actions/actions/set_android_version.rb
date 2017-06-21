module Fastlane
  module Actions
    module SharedValues
      GRADLE_VERSION_NAME_REGEX = /VERSION_NAME=(.+)/
    end

    class SetAndroidVersionAction < Action
      class << self
        def run(params)
          version = params[:version]
          path = params[:gradle_properties_path]

          replace_in_gradle_properties(
            path,
            SharedValues::GRADLE_VERSION_NAME_REGEX,
            "VERSION_NAME=#{version}",
          )
        end

        def available_options
          [
            FastlaneCore::ConfigItem.new(
              key: :version,
              description: "The new version number to use",
              optional: false,
              is_string: true,
            ),
            FastlaneCore::ConfigItem.new(
              key: :gradle_properties_path,
              env_name: "GRADLE_PROPERTIES_PATH",
              description: "The path to the gradle.properties file for the project",
              optional: false,
              is_string: true,
            ),
          ]
        end

        private

        def replace_in_gradle_properties(path, regex, replacement)
          gradle_properties = File.read(path)
          File.write(path, gradle_properties.gsub(regex, replacement))
        end
      end
    end
  end
end
