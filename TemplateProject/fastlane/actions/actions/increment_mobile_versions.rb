module Fastlane
  module Actions
    class IncrementMobileVersionsAction < Action
      def self.run(params)
        type = params[:type]
        xcodeproj = File.join("..", params[:xcodeproj])
        gradle_properties_path = File.join("..", params[:gradle_properties_path])

        case type
        when "build"
          UI.message "Only incrementing the build number. Nothing to do!"
          false

        when "major", "minor", "patch"
          other_action.increment_version_number(
            bump_type: type,
            xcodeproj: xcodeproj,
          )

          other_action.set_android_version(
            version: other_action.get_version_number(xcodeproj: xcodeproj),
            gradle_properties_path: gradle_properties_path,
          )

          true

        else
          UI.error "Invalid bump type '#{type}'"
          exit 1
        end
      end

      def self.return_value
        "Returns a boolean that indicates if the version was incremented"
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(
            key: :type,
            description: "The type of increment to perform",
            optional: false,
            is_string: true,
          ),
          FastlaneCore::ConfigItem.new(
            key: :xcodeproj,
            env_name: "FL_VERSION_NUMBER_PROJECT",
            description: "The path to the Xcode project",
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
    end
  end
end
