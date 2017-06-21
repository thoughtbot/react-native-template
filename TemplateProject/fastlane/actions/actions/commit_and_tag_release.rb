module Fastlane
  module Actions
    class CommitAndTagReleaseAction < Action
      def self.run(params)
        version = params[:version]
        build_number = params[:build_number]
        files = params[:files].map do |file|
          File.join("..", file)
        end

        other_action.git_commit(
          path: files,
          message: "Bump version to #{version} (#{build_number})",
        )

        other_action.add_git_tag(tag: "v#{version}+#{build_number}")
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(
            key: :version,
            description: "The version to use for the commit and tag",
            optional: false,
            is_string: true,
          ),
          FastlaneCore::ConfigItem.new(
            key: :build_number,
            description: "The build number to use for the commit and tag",
            optional: false,
            is_string: false,
          ),
          FastlaneCore::ConfigItem.new(
            key: :files,
            description: "The changed files to commit",
            optional: false,
            is_string: false,
          ),
        ]
      end
    end
  end
end
